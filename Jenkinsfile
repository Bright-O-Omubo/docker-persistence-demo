 pipeline {
    agent any
    parameters{
        booleanParam(name: "testAuth", defaultValue: false, description: "")
    }
    stages {

        stage("build") {
            steps {
                 script{
                     withCredentials ([
                         usernamePassword(credentialsId: "dockerhub-creds", usernameVariable: "USER", passwordVariable: "PWD")
                     ]) {
                         sh "docker build -t brightdevops/docker-artifact:1.8"
                         sh "docker images"
                         sh "echo $PWD | docker login -u $USER --password-stdin"
                         sh "docker push brightdevops/docker-artifact:1.8"
                     }
                 }
                echo "building artifact"
            }
        }
        stage("test") {
            when {
                expression {
                    params.testAuth == false
                }
            }
            steps{
                echo "running tests"
            }
        }
        stage("deploy") {

            steps {
                echo "deploying application"
            }
        }
    }
}
