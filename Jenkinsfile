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
    
}
}
