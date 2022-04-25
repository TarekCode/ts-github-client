import GithubClient from "./client.js";
import parseInput from "./input.js"

try {
    let args = parseInput(process.argv);

    let client = new GithubClient(args.token);

    if (args.cmd === "create") {
        await client.createRelease(args.tagName, args.prerelease);
    } else if (args.cmd === "promote") {
        await client.promoteRelease(args.tagName);
    }
} catch (error) {
    console.error(error);
}
