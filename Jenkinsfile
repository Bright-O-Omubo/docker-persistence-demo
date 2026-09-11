pipeline {
    agent any
    parameters{
        booleanParam(name: "testAuth", defaultValue: false, description: "")
    }
    stages {

        stage("build") {

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
