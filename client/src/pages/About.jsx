export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            Welcome to DAWdle Marketplace
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>Quick Overview</p>

            <p>
              On this site, you will be able to browse and create posts for your
              DAWdle adventures. You can interact with other users through posts
              by commenting on their posts, liking them, and making your own.
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other users. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
