const chromedriver = require('chromedriver');

module.exports = {
    src_folders: ["steps"], //pasta com os steps definitions
    page_objects_path: 'pages/', //pasta com os seletores da página
    custom_commands_path: 'helpers/commands/',
    custom_assertions_path: 'helpers/assertions/',
      test_workers: {
        enabled: true,
        workers: "auto"
      },
    test_settings: {
        default: {
            skip_testcases_on_fail: true,
            persist_globals: true,
            globals : {
              "produto" : "",
              "tituloBusca" : "",
              "tituloProduto" : "",
              "preco": ""
            },
            screenshots: {
                enabled: true,
                path: 'screenshots'
            },
            launch_url: 'https://www.amazon.com.br/',
            webdriver: {
                start_process: true,
                server_path: chromedriver.path,
                port: 9515
            },
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    }
};