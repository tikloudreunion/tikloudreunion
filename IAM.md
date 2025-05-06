# 🔐 Identity and Access Management (IAM)

## 📘 Overview

**IAM (Identity and Access Management)** is a framework that governs:

- ✅ **Authentication** – Verifying *who* the user is.
- ✅ **Authorization** – Determining *what* the user is allowed to do.
- ✅ **Role and Permission Management** – Structuring access through user roles and permissions.

---

## 🧰 Technology Stack and Responsibilities

| Tool       | Purpose                                                                 |
|------------|-------------------------------------------------------------------------|
| **Devise** | Handles **authentication** – user sign-up, login, logout, password reset, etc. |
| **Pundit** | Manages **authorization** – defines what each user can access or perform via policies. |
| **Rolify** | Provides **role management** – allows assigning and querying user roles like `admin`, `editor`, etc. |

---

## 🔍 How It Works Together

1. **Devise**:  
   - Ensures that users are **properly authenticated** (i.e., logged in).
   - Adds helpers like `current_user` and `user_signed_in?`.

2. **Rolify**:  
   - Adds **role support** to your User model.
   - Example: `user.has_role?(:admin)` or `user.add_role(:editor)`.
   - Can assign **multiple roles** per user and works well with scopes.

3. **Pundit**:  
   - Evaluates **authorization logic** via policy files.
   - Uses `current_user` and their roles (via Rolify) to decide access.
   - Example: `authorize @project` or `policy(@project).update?`.

---

## 🎯 Example Flow

1. User logs in via **Devise** → now `current_user` is available.
2. **Rolify** tells us that `current_user` has the role `:admin`.
3. **Pundit** uses that role to check whether `current_user` is allowed to access a specific resource or action.
