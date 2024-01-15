function Post() {
    return (
        <div className="flex py-4 gap-6">
            <img
                src="https://techcrunch.com/wp-content/uploads/2023/09/GettyImages-1647521480-e1694685235777.jpg?w=430&h=230&crop=1"
                alt=""
                className="rounded-s-xl"
            />
            <div className="flex flex-col gap-2">
                <div className="text-3xl font-bold pt-0">
                    OpenAI debuts ChatGPT subscription aimed at small teams
                </div>
                <div className="flex gap-3">
                    <a href="" className="text-gray-600 font-bold">
                        Kyle Wiggers
                    </a>
                    <time className=" text-gray-500">2024-15-01 10:18:21</time>
                </div>
                <div>
                    Aptly called ChatGPT Team, the plan provides a dedicated
                    workspace for teams up to 149 people using ChatGPT, as well
                    as admin tools for team management. All users in a ChatGPT
                    Team gain access to OpenAI’s latest models — GPT-4 (which
                    generates text), GPT-4 with Vision (which understands images
                    in addition to text) and DALL-E 3 (which creates images) —
                    plus tools to allow ChatGPT to analyze, edit and extract
                    info from uploaded files.
                </div>
            </div>
        </div>
    );
}

export default Post;
