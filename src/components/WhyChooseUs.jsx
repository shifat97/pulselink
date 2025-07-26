export default function WhyChooseUs() {
    const chooseDta = [
        {
            title: "Efficiency",
            description:
                "Streamlined appointment scheduling that fits into your busy lifestyle.",
        },
        {
            title: "Convenience",
            description:
                "Access to a network of trusted healthcare professionals in your area.",
        },
        {
            title: "Personalization",
            description:
                "Tailored recommendations and reminders to help you stay on top of your health.",
        },
    ];

    return (
        <section className="why-choose-us mt-80">
            <h1 className="text-gray1 text-3xl uppercase">
                Why <span className="text-black1 font-semibold">Choose Us</span>
            </h1>
            <div className="text-gray1 grid grid-cols-1 lg:grid-cols-3 mt-6">
                {chooseDta.map((data, index) => (
                    <div
                        key={index}
                        className={`${
                            index == 0
                                ? "border border-b-0 lg:border-b lg:border-r-0"
                                : index == chooseDta.length - 1
                                ? "border border-t-0 lg:border-t lg:border-l-0"
                                : "border"
                        } p-20 border-gray2`}
                    >
                        <h3 className="text-16 font-bold uppercase">
                            {data.title}:
                        </h3>
                        <p className="mt-6">{data.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
