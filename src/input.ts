interface UserInput {
    cmd: string;
    tagName: string;
    token: string;
    prerelease: boolean;
}

export default function parseInput(args: string[]): UserInput {
    let resp: UserInput = {
        cmd: "",
        tagName: "",
        token: "",
        prerelease: false
    };

    for (let i = 2; i < process.argv.length; i++) {
        switch (process.argv[i]) {
            case "--create":
                resp.cmd = "create";
                break;
            case "--promote":
                resp.cmd = "promote";
                break;
            case "--prerelease":
                resp.prerelease = true;
                break;
            case "-n":
                resp.tagName = process.argv[i + 1];
                break;
            case "-t":
                resp.token = process.argv[i + 1];
                break;
            default:
                break;
        }
    }

    if (!resp.cmd) {
        throw new Error("please use --create or --promote to specify whether you want to create or promote a release");
    }

    if (!resp.tagName) {
        throw new Error("please provide a tagName value with -n");
    }

    if (!resp.token) {
        throw new Error("please provide a token value with -t");
    }

    return resp;
}
