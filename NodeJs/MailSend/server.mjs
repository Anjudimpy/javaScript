import server, {Solution} from "./index.mjs";

server.listen(5000, () => {
    Solution();
    console.log(`Server running on port 5000`);
});