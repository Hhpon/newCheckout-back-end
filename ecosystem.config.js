module.exports = {
  apps : [{
    name: 'quiz',
    script: 'app.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'hhp',
      host : '47.94.210.206',
      ref  : 'origin/master',
      repo : 'git@github.com:Hhpon/newCheckout-back-end.git',
      path : '/home/hhp/www/lsj_test/production',
      ssh_options: 'StrictHostKeyChecking=no',
      'post-deploy': 'npm install --registry=https://registry.npm.taobao.org && pm2 reload ecosystem.config.js --env production',
      env:{
        NODE_ENV: 'production'
      }
    }
  }
};
