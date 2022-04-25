import axios, { AxiosBasicCredentials } from "axios";
import config from "./config.js"

export default class GithubClient {
    private baseUrl: string;
    private username: string;
    private token: string;
    private repo: string;

    constructor(token: string) {
        this.baseUrl = config.baseUrl;
        this.username = config.username;
        this.token = token;
        this.repo = config.repo;
    }

    public async createRelease(tagName: string, preRelease: boolean): Promise<void> {
        var res = await axios.post(`${this.baseUrl}/repos/${this.username}/${this.repo}/releases`, {
            tag_name: tagName,
            prerelease: preRelease
        }, { auth: this.getBasicAuth() });

        console.log(`Create Release request completed with status: ${res.status}`);
    }

    public async promoteRelease(tagName: string) {
        var res = await axios.patch(`${this.baseUrl}/repos/${this.username}/${this.repo}/releases/${await this.findRelease(tagName)}`,
            { prerelease: false },
            { auth: this.getBasicAuth() });

        console.log(`Promote Release request completed with status: ${res.status}`);
    }

    private async findRelease(tagName: string): Promise<string> {
        var res = await axios.get(`${this.baseUrl}/repos/${this.username}/${this.repo}/releases/tags/${tagName}`,
            { auth: this.getBasicAuth() });

        console.log(`Find Release request completed with status: ${res.status}`);

        return res.data.id;
    }

    private getBasicAuth(): AxiosBasicCredentials {
        return {
            username: this.username,
            password: this.token
        }
    }
}
