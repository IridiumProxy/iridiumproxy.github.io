---
title: HTTPS Redirection
---

**To ensure secure communication, Iridium will automatically redirect all HTTP requests to HTTPS when HTTPS is enabled.** This helps protect data integrity and confidentiality by encrypting the data transmitted between the client and server.

## How It Works

Two TCP sockets (one for HTTP and one for HTTPS) are opened when HTTPS is enabled. The HTTP socket listens for incoming requests on port 80, while the HTTPS socket listens on port 443.

When a request is received on the HTTP socket, Iridium responds with a `301 Moved Permanently` status code, along with a `Location` header that points to the corresponding HTTPS URL. This instructs the client (e.g., a web browser) to make a new request to the secure HTTPS endpoint.
