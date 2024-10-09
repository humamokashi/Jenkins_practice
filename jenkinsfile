pipeline{
    agent any
    stages{
        stage('Clone repo')
        {
            steps{
                git branch:'main',url:'https://github.com/humamokashi/Jenkins.git'
            }
        }
        stage('Install dependencies'){
            steps{
                sh 'npm install'
            }
        }
        // stage('Testing my app'){
        //     steps{
        //         sh 'npm test'
        //     }
        // }
        stage('Start the app'){
            input{
                message 'Do you really want to start?'
                ok 'click on ok'
                submitter 'huma'
            }
           steps{
            sh 'npm start'
           }
        }
    }
}