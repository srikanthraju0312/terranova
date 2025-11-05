# Multi-stage build for optimized production image
# Stage 1: Build the application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --legacy-peer-deps

# Copy source code and assets
COPY . .

# Build the application
# This will create the 'docs' directory as specified in vite.config.ts
RUN npm run build

# Stage 2: Production server with Nginx
FROM nginx:alpine

# Install curl for healthcheck
RUN apk add --no-cache curl

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/

# Copy built assets from builder stage
# The build output is in 'docs' directory as per vite.config.ts
COPY --from=builder /app/docs /usr/share/nginx/html

# Copy public images to ensure they're available
# This handles the local images in public/images/
COPY --from=builder /app/public/images /usr/share/nginx/html/images

# Set proper permissions
RUN chmod -R 755 /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/terranova/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

