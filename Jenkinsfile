pipeline {
	environment { 
        	registry = "limmx/webapp" 
	        registryCredential = 'docker' 
        	dockerImage = '' 
    }

  agent any

  stages {

    stage('Checkout Source') {
      steps {
        git url:'https://github.com/meixiann/projects.git', branch:'master'
      }
    }
    
      stage('Building our image') { 
            steps { 
                script { 
                    dockerImage = sh "docker build --network=host -t $REGISTRY:latest ." 
                }
            } 
        }

        stage('Deploy our image') { 
            steps { 
                script { 
                    docker.withRegistry( '', registryCredential ) { 
                        sh "docker push $REGISTRY "
                    }
                } 
            }
        } 
    
    stage('Deploy App') {
      steps{
	withKubeConfig([credentialsId: 'kubernetes_config', serverUrl: 'https://192.168.80.151:6443']){
	        script {
			sh "kubectl apply -f deployment.yml"
		}
	}
     }
  }
  stage('Deploy Services') {
      steps{ 
	withKubeConfig([credentialsId: 'kubernetes_config', serverUrl: 'https://192.168.80.151:6443']){
                script {
                        sh "kubectl apply -f services.yml"
            }
        }
     }
  }
  stage('Deploy Pod') {
      steps{
        withKubeConfig([credentialsId: 'kubernetes_config', serverUrl: 'https://192.168.80.151:6443']){
                script {
                        sh "kubectl apply -f pod.yml"
                }
        }
     }
  }

}
}

