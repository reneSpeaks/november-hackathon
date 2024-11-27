const News = () => {
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const news = {
    news_id: 1,
    creator_id: 1,
    news_title: "From plastic bottles to boxed water, How can you contribute?",
    news_content: "Lorem Ipsum",
    news_image: '/news/boxed-water-is-better-9qDtdcQoTw8-unsplash.jpg',
    createdAt: new Date().toLocaleDateString('en-US', dateOptions),
  };
  const author = {
    user_id: 1,
    username: "Rene",
    email: "rene@example.com",
    user_avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    user_country: "Germany",
    team_name: "Zemlak, Daniel and Leannon",
    job_name: "Desktop Support Technician",
  };

  return (
    <section className="hero min-h-screen mt-20">
      <div className="hero-content w-full flex-col">
        <figure className="h-80 w-full relative">
          <img className="object-cover h-80 w-full" src={news.news_image} alt="" />
          <h1 className="absolute bottom-4 left-4 text-secondary-content text-4xl font-semibold self-start">{news.news_title}</h1>
        </figure>
        <article className="w-full h-full relative border-y-4 border-y-green-300 border-x-2">
          <header className="p-4">
            <p className="text-md">by <strong>{author.username}</strong></p>
            <p className="text-sm"><em>{news.createdAt}</em></p>
          </header>
          <section className="p-4 flex flex-wrap gap-4">
            <p>
              In recent years, the growing concern over environmental degradation has led many to reevaluate everyday
              practices. From reducing plastic waste to adopting sustainable alternatives, small but consistent steps
              can contribute to a healthier planet. One area of focus is our daily drinking habits—plastic bottles
              dominate the convenience market, but there’s a growing shift towards more eco-friendly options like boxed
              water, reusable containers, and glass. Let’s explore how you can contribute to this green movement.
            </p>
            <h3 className="text-xl font-semibold">The Plastic Problem</h3>
            <p>Plastic bottles are a major environmental challenge. Globally, over 1 million plastic bottles are
              purchased every minute, and less than 10% of these are recycled effectively. The rest often ends up in
              landfills or the ocean, taking hundreds of years to decompose and causing harm to wildlife.</p>
            <p>While recycling helps, it is not the ultimate solution. The production process for plastics involves
              fossil fuels, contributing to carbon emissions. Moreover, not all plastics are recyclable, and
              contamination can render even recyclable plastics unusable.</p>
            <h3 className="text-xl font-semibold">A Shift Towards Sustainability</h3>
            <p>To counter these issues, innovative solutions are emerging. Among them, boxed water and reusable
              containers are leading the way. Here’s how you can integrate these into your daily routine:</p>
            <ol>
              <li>
                <h4 className="text-lg font-semibold">1. Choose Reusable Bottles</h4>
                <p>Investing in a high-quality reusable water bottle is one of the simplest and most impactful changes
                  you can make. Stainless steel and glass bottles are durable, toxin-free, and can keep your drinks at
                  the desired temperature for extended periods. Brands like Hydro Flask, S’well, and Klean Kanteen offer
                  stylish and functional options.</p>
              </li>
              <li>
                <h4 className="text-lg font-semibold">2. Embrace Boxed Water</h4>
                <p>Boxed water is gaining traction as an eco-friendly alternative to plastic bottles. Packaged in
                  cartons made primarily from renewable resources like paper, boxed water is recyclable and often
                  produced by companies with a commitment to sustainability. Some brands also incorporate plant-based
                  caps to further reduce their carbon footprint.</p>
              </li>
              <li>
                <h4 className="text-lg font-semibold">3. Refill and Reduce</h4>
                <p>Utilize refill stations, which are becoming increasingly common in urban areas, parks, and offices.
                  Carrying your own bottle and refilling it is not only sustainable but also cost-effective. Apps like
                  Tap help locate nearby refill stations, making this practice more accessible.</p>
              </li>
            </ol>
            <h3 className="text-xl font-semibold">Sustainability Beyond Bottles</h3>
            <p>While addressing water packaging is crucial, adopting sustainable practices across other aspects of life
              enhances your overall impact. Here are a few ideas:</p>
            <ul>
              <li>
                <strong>Buy in Bulk:</strong> Reduce packaging waste by purchasing household items, including dry foods
                and cleaning products, in bulk. Use refillable containers where possible.
              </li>
              <li>
                <strong>Support Local:</strong> Choose locally-produced goods to minimize the environmental cost of
                transportation.
              </li>
              <li>
                <strong>Educate Yourself:</strong> Stay informed about eco-friendly brands and practices. Advocacy
                through conversation and social media helps spread awareness.
              </li>
            </ul>
            <h3 className="text-xl font-semibold">The Role of Businesses and Governments</h3>
            <p>While individual action is vital, systemic change is essential for large-scale impact. Governments can
              implement regulations that reduce plastic production, improve recycling systems, and incentivize
              innovation. Similarly, businesses can adopt sustainable packaging, invest in renewable energy, and
              contribute to conservation projects.</p>
            <h3 className="text-xl font-semibold">How Your Actions Matter</h3>
            <p>Every decision you make, from choosing a boxed water brand to reusing a bottle, is a step toward
              sustainability. These small changes, when adopted collectively, lead to significant environmental
              benefits. Reducing waste, conserving energy, and supporting eco-friendly initiatives contribute to a
              circular economy that prioritizes resource efficiency.</p>
            <h3 className="text-xl font-semibold">A Sustainable Future</h3>
            <p>The journey to sustainability begins with awareness and action. By embracing alternatives to plastic
              bottles and adopting a lifestyle rooted in mindfulness, you’re contributing to a healthier planet for
              future generations. Whether it’s carrying a reusable bottle or advocating for policy changes, your efforts
              are invaluable. So, the next time you reach for a drink, think beyond convenience and consider how your
              choice can make a difference.</p>
            <p>Sustainability isn’t about perfection—it’s about progress. Together, we can turn the tide on waste and
              move towards a cleaner, greener future.</p>
          </section>
        </article>
      </div>
    </section>
  );
};

export default News;
