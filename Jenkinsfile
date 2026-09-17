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
                     imageBuild "brightdevops/docker-artifact:1.9"
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
                    imageTest "brightdevops/docker-artifact:1.9"
                 }
             }
         }
         stage("deploy") {

            steps {

               script{
                    deployBuild "brightdevops/docker-artifact:1.9"
               }
            }
         }
     }
 }
