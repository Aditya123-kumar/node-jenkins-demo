pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                checkout scm
            }
        }

      stage('Install & Test') {
    steps {
        echo 'Installing dependencies...'
        bat 'npm install'

        echo 'Running tests...'
        bat '''
            npm test
            echo TEST_EXIT_CODE=%ERRORLEVEL%
        '''
    }
}

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t node-jenkins-demo:%BUILD_NUMBER% .'
            }
        }

        stage('Start Containers') {
            steps {
                echo 'Starting Blue-Green containers...'
                bat 'docker compose up -d'
            }
        }

        stage('Health Check') {
            steps {
                echo 'Checking application health...'

                bat '''
                    curl -f http://localhost:8081/ready
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment completed successfully!'
            }
        }
    }

    post {
        success {
            echo 'ZERO-DOWNTIME DEPLOYMENT SUCCESSFUL'
        }

        failure {
            echo 'DEPLOYMENT FAILED'
        }
    }
}
