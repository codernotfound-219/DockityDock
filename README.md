Learning Docker

Terminologies:
1. Container: packaged application with all necessary dependencies and configurations
    -   portable, efficient
2. Container Repository: storage for containers
    -   private (company-based) or public (dockerhub)

Use: 
1. Application development:
Without containerization, every member of the team would have to individually install specific versions of resources specific to their operating systems to work together.
Any error that occurs during the installation process, results in hours wasted figuring a fix.
With containerization, the container acts as its own isolated environment (linux based image). It is packaged with all needed configuration and resource versions.
One docker command can be used to the install the application regardless of the operating system.

2. Application Deployment:
Development team develops artifacts along with documentation on their configuration specific to the server on which it is to be deployed. (JAR file)
The operations team receives these artifacts and sets up the environment.
Every resource must be installed on the Operating System of the server. (Could result in version conflict)
Requires a textual guide for deployment. (Could result in misunderstandings)

With containers:
Developers and operations work together to package the application.
Run the docker command in the server, and its done!


Technical Understanding:
1. Container
    - Layers of images
    - Mostly Linux Base Images - typically alpine (small in size)
    - Application image goes on top

    // put in a table:
    postgres - application image
    alpine - base image
