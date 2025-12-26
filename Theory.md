### What is a container?
 - **Container**: A packaged application with all necessary dependencies and configurations.
    *   Portable and efficient.
*   **Container Repository**: Storage for containers.
    *   Can be private (company-based) or public (e.g., Docker Hub).

## Use Cases:

### 1. Application Development:

**Without Containerization:**
*   Every team member would need to individually install specific versions of resources tailored to their operating systems to collaborate effectively.
*   Errors during the installation process could lead to hours wasted on troubleshooting.

**With Containerization:**
*   The container acts as its own isolated environment (typically Linux-based). It is packaged with all required configurations and resource versions.
*   A single Docker command can be used to install and run the application, regardless of the host operating system.

### 2. Application Deployment:

**Traditional Deployment:**
*   Development teams create artifacts along with documentation detailing their configuration for specific deployment servers (e.g., a JAR file).
*   Operations teams receive these artifacts and set up the environment.
*   Every resource must be installed directly on the server's operating system, which can lead to version conflicts.
*   Relies on textual deployment guides, which can result in misunderstandings.

**With Containers:**
*   Developers and operations teams collaborate to package the application within a container.
*   Running a simple Docker command on the server deploys the application instantly.

## Technical Understanding:

### 1. Container Structure:

Containers are built from layers of images. They typically start with a small **Linux Base Image** (e.g., Alpine) for efficiency, with the **Application Image** layered on top.

| Component  | Description       |
| :--------- | :---------------- |
| `postgres` | Application Image |
| `alpine`   | Base Image        |

![[Pasted image 20251224191110.png]]
All the hashes seen above indicate layers!

### 2. Image vs Container:

- Image:
	- The actual package
	- **Artifact**, that can be moved around
	- **NOT RUNNING**
- Container:
	- Once an Image is running locally, it becomes a **Container**.
	- Has its own virtual file system, with its own abstraction of an operating system. (Different from the Host machine)
	- Container is the running environment for the Image.


## Docker vs Virtual Machine

| Layers of Operating System |
| -------------------------- |
| Applications               |
| OS Kernel                  |
| Hardware                   |
- Docker virtualizes the **Application** layer
	- Much smaller in size (MB)
	- Fast start
	- **Not compatible** across host OS systems. (A linux based docker image will not be compatible on windows!)
	- **Workaround:** Docker toolbox -> abstracts the kernel too.
- Virtual machine virtualizes the **Application + OS kernel**
	- Much larger in size (GB)
	- Slow start
	- Compatible with any OS host


## Container Port vs Host Port
- A binding is created between the ports of container port and host port. (Containers port 5000 -> Host's port 5000)
- A conflict occurs if the containers port that you want to connect to is already in use at the host's end.