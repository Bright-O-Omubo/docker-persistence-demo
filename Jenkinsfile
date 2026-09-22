@Library ('Jenkisn-shareLibrary')_

 pipeline {
     agent any
     parameters{
         booleanParam(name: "testAuth", defaultValue: false, description: "")
     }
     stages {

         stage("build") {
             steps {
                  script{
                     echo "building artifact"
                     imageBuild ("brightdevops/docker-artifact:2.0")
                  }
             }
         }
         stage("test") {
             when {
                 expression {
                     params.testAuth == false
                 }
             }
             steps{
                 script{
                    testBuild ("brightdevops/docker-artifact:2.0")
                 }
             }
         }
         stage("deploy") {
            when {
                expression {

                    BRANCH_NAME = "main"
                }
            }

            steps {

               script{
                    deployBuild ("brightdevops/docker-artifact:2.0")
               }
            }
         }
     }
 }
