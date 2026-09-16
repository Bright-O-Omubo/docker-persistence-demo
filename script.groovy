def imageBuild() {
    script {
        sh "docker build -t localhost:8083/jma:1.9 ."
    }
}

def buildTest() {
    echo "running image test"
    sh "mvn test"
}

def deployBuild() {
    echo " deploying image to nexus repository"
    withCredentials ([usernamePassword(credentialsId: "nexus-creds", usernameVariable: $USER, passwordVariable: $PWD)]) {
        sh "echo $PWD | docker login localhost:8083 -u $USER --password-stdin"
        sh "docker push localhost:8083/jma:1.9"
    }
}
return this