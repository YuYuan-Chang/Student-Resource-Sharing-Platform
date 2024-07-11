# MicroservicesFullStack

## Overview

MicroservicesFullStack is a comprehensive project demonstrating a full-stack application built using microservices architecture. The application leverages various technologies to build scalable, maintainable, and efficient microservices that communicate with each other seamlessly.

## Features

- **Authentication Service**: Manages user authentication and authorization.
- **Infrastructure Configuration**: Uses Kubernetes for container orchestration and deployment.
- **Scalable Architecture**: Designed to be scalable and easy to manage.
- **Secure**: Implements security best practices for data protection.

## Microervices

### Auth Service

This service handles user authentication and authorization. It includes endpoints for user signup, signin, signout, and retrieving the current user.

- **Endpoints**:
- `/api/users/signup` - Register a new user.
- `/api/users/signin` - Sign in an existing user.
- `/api/users/signout` - Sign out a user.
- `/api/users/currentuser` - Get the current authenticated user.

### Infrastructure (Infra)

The infrastructure setup includes Kubernetes configurations for deploying the microservices and their dependencies.

- **Kubernetes Configurations**:
  - `auth-depl.yaml` - Deployment configuration for the Auth service.
  - `auth-mongo-depl.yaml` - Deployment configuration for MongoDB used by the Auth service.
  - `ingress-srv.yaml` - Ingress configuration for routing traffic.

## Getting Started

### Prerequisites

- Docker
- Kubernetes (Minikube or any Kubernetes cluster)
- Skaffold

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/YuYuan-Chang/MicroservicesFullStack.git
    cd MicroservicesFullStack
    ```

2. **Install dependencies for the Auth service**:
    ```sh
    cd auth
    npm install
    ```

3. **Set up Kubernetes and Skaffold**:
  - Ensure that Kubernetes is running (e.g., start Minikube).
    ```
    kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.10.1/deploy/static/provider/cloud/deploy.yaml
    ```
  - Deploy using Skaffold:
    ```sh
    skaffold dev
    ```

### Running the Services

The services can be run locally using Docker and Kubernetes. Skaffold helps with the continuous development workflow.

### Directory Structure

- **auth**: Contains the Auth service code.
  - **src**: Source code for the Auth service.
    - **errors**: Custom error handling.
    - **middlewares**: Middleware for request validation and error handling.
    - **models**: Mongoose models.
    - **routes**: Route handlers for authentication.
    - **services**: Helper services such as password hashing.
- **infra**: Kubernetes infrastructure configurations.
  - **k8s**: Kubernetes deployment and service YAML files.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Contact

For any inquiries, please contact YuYuan-Chang.

