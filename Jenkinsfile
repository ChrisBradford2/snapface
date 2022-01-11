pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        echo 'Start test'
        sh 'npm install'
      }
    }

    stage('test') {
      steps {
        sh 'ng test'
      }
    }

    stage('deploy') {
      steps {
        sh 'ng build && ng deploy --base-href=/snapface/'
      }
    }

  }
}