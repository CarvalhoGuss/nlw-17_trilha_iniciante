const { select } = require('@inquirer/prompts')

const start = async () => {

    while(true){

        const opcao = await select({ // vai aguardar a ação do usuário
            message: "Menu >", // vai exibir essa mensagem
            choices: [  // vai mostrar as opções abaixo
                {
                    name: "cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        
        switch(opcao) {
            case "cadastrar":
                console.log("vamos cadastrar")
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                return
        }
    }
}

start()
