const chromedriver = require('chromedriver');

module.exports = {
    src_folders: ["steps"], //pasta com os steps definitions
    page_objects_path: 'pages/', //pasta com os seletores da página
    test_settings: {
        default: {
            skip_testcases_on_fail: false,
            globals : {
              "produto" : "",
              "tituloBusca" : "",
              "tituloProduto" : "",
              "preco": ""
            },
            persist_globals: true,
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