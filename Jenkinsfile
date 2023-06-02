pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/jccolina/qa-challenge', branch: 'main')
      }
    }

    stage('logs') {
      steps {
        sh '''ls -al
echo "hello jenkins"'''
      }
    }

  }
}