# ==========================================
# Stage 1: Build the React/Vite application
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency definitions
COPY package.json package-lock.json* ./

# Install all dependencies (including devDependencies needed for Vite build)
RUN npm config set fetch-retry-maxtimeout 600000 \
    && npm config set fetch-retries 5 \
    && npm install

# Copy the rest of the source code
COPY . .

# Build the static production files into /app/dist
RUN npm run build

# ==========================================
# Stage 2: Serve with Nginx for production
# ==========================================
FROM nginx:alpine

# Copy built assets from the builder stage to Nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration (optional, see step 2)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]