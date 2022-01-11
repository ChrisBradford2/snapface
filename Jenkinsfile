pipeline {
  agent {
    node {
      label 'ng'
    }

  }
  stages {
    stage('build') {
      steps {
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