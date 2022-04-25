interface Config {
    baseUrl: string;
    username: string;
    repo: string
}

let config: Config = {
    baseUrl: "https://api.github.com",
    username: "TarekCode",
    repo: "TestRepo"
};

export default config;
