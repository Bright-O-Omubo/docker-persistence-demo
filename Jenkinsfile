pipeline {
    agent any
    parameters{
<<<<<<< HEAD
        booleanParam(name: "testAuth", defaultValue: false, description: "")
=======
        booleanParams(name: "testAuth", defaultValue: false, desciption: "")
>>>>>>> 03e4c2c (build mod)
    }
    stages {

        stage("build") {
            script{
                withCredentials([name: dockerhub-creds, userVar: USR, passVar: PWD, description ""
                ]) {
                sh "docker build -t brightdevops/java-node:1.8"
                sh "dokcer images"
                sh "echo ${PWD} | docker login -u ${USR} --password-stdin"
                sh "docker push brightdevops/java-node:1.8"
                }
            }
            steps {
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
