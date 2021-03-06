/**
   * @author Adarsh Singh
   * @description PM2 Application Configuration
   */
module.exports = {
  apps : [{
    name: 'neo-angular7-noob',
    script: 'index.js',
    instances: 1,
    autorestart: true,
    watch: true,
    log_type: 'json',
    log_date_format: 'YYYY-MM-DD HH:mm:ss ZZ',
    max_memory_restart: '1G',
    port: 8081,
    env: {
      NODE_ENV: 'development'
    }
  }]
};
