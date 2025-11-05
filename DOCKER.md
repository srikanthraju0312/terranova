# Docker Deployment Guide for Terranova Website

This guide explains how to build and deploy the Terranova real estate website using Docker.

## Prerequisites

- Docker installed (version 20.10 or higher)
- Docker Compose installed (version 2.0 or higher)

## Quick Start

### Using Docker Compose (Recommended)

1. **Build and start the container:**
   ```bash
   docker-compose up -d
   ```

2. **Access the application:**
   Open your browser and navigate to: `http://localhost:8080/`

3. **Stop the container:**
   ```bash
   docker-compose down
   ```

### Using Docker CLI

1. **Build the image:**
   ```bash
   docker build -t terranova-website .
   ```

2. **Run the container:**
   ```bash
   docker run -d -p 8080:80 --name terranova-web terranova-website
   ```

3. **Access the application:**
   Open your browser and navigate to: `http://localhost:8080/`

4. **Stop and remove the container:**
   ```bash
   docker stop terranova-web
   docker rm terranova-web
   ```

## Docker Architecture

### Multi-Stage Build

The Dockerfile uses a multi-stage build approach:

1. **Builder Stage (node:20-alpine):**
   - Installs dependencies
   - Builds the React + Vite application
   - Outputs to `docs` directory (as configured in vite.config.ts)

2. **Production Stage (nginx:alpine):**
   - Uses lightweight Nginx Alpine image
   - Copies built assets from builder stage
   - Copies local images from `public/images/`
   - Serves the application with optimized Nginx configuration

### Nginx Configuration

The custom `nginx.conf` includes:

- **Large Asset Handling:** Increased buffer sizes to prevent content length errors
- **Gzip Compression:** Enabled for all text-based assets
- **Caching:** Long-term caching for static assets (images, fonts, CSS, JS)
- **Base Path Support:** Properly handles the `/terranova/` base path
- **Image Optimization:** Special handling for images with sendfile optimization
- **Security Headers:** X-Frame-Options, X-Content-Type-Options, X-XSS-Protection
- **CORS Support:** Enabled for fonts and images

## Environment Variables

Currently, the application doesn't require environment variables. If you need to add them:

1. Create a `.env` file in the project root
2. Add variables to `docker-compose.yml`:
   ```yaml
   environment:
     - VITE_API_URL=${VITE_API_URL}
     - VITE_APP_ENV=${VITE_APP_ENV}
   ```

## Troubleshooting

### Port Already in Use

If port 8080 is already in use, change it in `docker-compose.yml`:
```yaml
ports:
  - "3000:80"  # Change 8080 to any available port
```

### Images Not Loading

1. Verify images exist in `public/images/` directory
2. Check browser console for 404 errors
3. Inspect the container:
   ```bash
   docker exec -it terranova-web ls -la /usr/share/nginx/html/images/
   ```

### Build Failures

1. Clear Docker cache and rebuild:
   ```bash
   docker-compose build --no-cache
   ```

2. Check Docker logs:
   ```bash
   docker-compose logs -f
   ```

### Content Length Errors

The nginx configuration includes settings to prevent content length errors:
- `proxy_buffering off`
- `sendfile on`
- `sendfile_max_chunk 1m`
- Increased buffer sizes

If you still encounter issues, check nginx error logs:
```bash
docker exec terranova-web cat /var/log/nginx/error.log
```

## Production Deployment

### Building for Production

```bash
# Build the image with a version tag
docker build -t terranova-website:1.0.0 .

# Tag for registry
docker tag terranova-website:1.0.0 your-registry.com/terranova-website:1.0.0

# Push to registry
docker push your-registry.com/terranova-website:1.0.0
```

### Health Checks

The container includes a health check that:
- Runs every 30 seconds
- Checks if the application is accessible at `/`
- Retries 3 times before marking as unhealthy
- Has a 40-second startup grace period

Check health status:
```bash
docker ps
# Look for "healthy" in the STATUS column
```

### Resource Limits

Add resource limits in `docker-compose.yml`:
```yaml
services:
  terranova-web:
    # ... other config
    deploy:
      resources:
        limits:
          cpus: '1'
          memory: 512M
        reservations:
          cpus: '0.5'
          memory: 256M
```

## Maintenance

### View Logs

```bash
# Docker Compose
docker-compose logs -f

# Docker CLI
docker logs -f terranova-web
```

### Update the Application

```bash
# Pull latest code
git pull

# Rebuild and restart
docker-compose up -d --build
```

### Clean Up

```bash
# Remove stopped containers
docker-compose down

# Remove images
docker rmi terranova-website

# Remove all unused Docker resources
docker system prune -a
```

## Performance Optimization

The Docker setup includes several optimizations:

1. **Multi-stage build:** Reduces final image size
2. **Alpine base images:** Minimal footprint
3. **Gzip compression:** Reduces bandwidth usage
4. **Static asset caching:** Improves load times
5. **Sendfile optimization:** Efficient file serving
6. **Health checks:** Ensures container reliability

## Security Considerations

1. **Non-root user:** Consider adding a non-root user in production
2. **Security headers:** Already configured in nginx.conf
3. **Regular updates:** Keep base images updated
4. **Secrets management:** Use Docker secrets for sensitive data

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Docker logs
3. Verify nginx configuration
4. Check the application build output

## Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Vite Documentation](https://vitejs.dev/)

