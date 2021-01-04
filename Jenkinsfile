pipeline {

  agent any

  stages {

    stage('Checkout Source') {
      steps {
        git url:'https://github.com/meixiann/projects.git', branch:'master'
      }
    }
    
      stage("Build image") {
            steps {
                script {
                    webapp = docker.build("limmx/webapp:${env.BUILD_ID}")
                }
            }
        }
    
      stage("Push image") {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                            webapp.push("latest")
                            webapp.push("${env.BUILD_ID}")
                    }
                }
            }
        }

    
    stage('Deploy App') {
      steps {
        script {
          kubernetesDeploy(configs: "development.yml", kubeconfigId: "kubernetes")
        }
      }
    }

  }

}
