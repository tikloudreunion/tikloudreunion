ARG NODE_VERSION=24.1.0
FROM node:${NODE_VERSION}-bookworm-slim AS builder

# Install builder dependencies
RUN apt update && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /usr/src/tikloudreunion

# Copy package files separately for better caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the project
RUN npm run build


FROM node:${NODE_VERSION}-bookworm-slim AS runner

# Install runner dependencies
RUN apt update && apt install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /usr/src/tikloudreunion

# Copy only the necessary built files from builder
COPY --from=builder /usr/src/tikloudreunion/.next .next
COPY --from=builder /usr/src/tikloudreunion/package.json package.json
COPY --from=builder /usr/src/tikloudreunion/package-lock.json package-lock.json

# Install only production dependencies
RUN npm ci --omit=dev

# Create non-root user
RUN useradd --system --home /usr/src/tikloudreunion --shell /usr/sbin/nologin tikloudreunion

# Set permissions
RUN chown -R tikloudreunion:tikloudreunion /usr/src/tikloudreunion
USER tikloudreunion

# Set environment variables
ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

# Start the app
CMD ["npm", "run", "start"]