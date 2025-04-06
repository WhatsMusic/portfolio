// app/cv/page.tsx
export default function CVPage() {
    return (
        <div className="p-8 space-y-8">
            <h1 className="text-3xl font-bold">Lebenslauf / CV</h1>

            <section>
                <h2 className="text-2xl font-semibold mb-2">About Me</h2>
                <p>
                    I am a Fullstack Developer with over 10 years of experience in software and web development. I combine technical expertise with creative problem-solving to build modern, scalable solutions.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">Career</h2>
                <p>
                    - Freelance Fullstack & Frontend Development (2022 – Present) <br />
                    - CTO Web Development at AL-ARABIYYA-INSTITUTE (2017 – 2022) <br />
                    - Technical Customer Service Manager at Borsig ZM (2016) <br />
                    - Project Manager at CRYOTEC Anlagenbau GmbH (2012 – 2016)
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">Education</h2>
                <p>
                    - IT Specialist for App Development, Syntax Institut (2023 – 2024) <br />
                    - Bachelor’s Degree in Industrial Engineering, Hochschule Merseburg (2009 – 2012)
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">Interests</h2>
                <p>
                    Passionate about technology, music, and creative problem-solving. I produce electronic music under the name “ARTEKK” and indie pop rock as “RobArteSoul.”
                </p>
            </section>

            <a
                href="/cv.pdf"
                target="_blank"
                className="inline-block px-6 py-3 bg-accent text-background rounded shadow hover:bg-accent/80 transition"
            >
                Download CV (PDF)
            </a>
        </div>
    );
}
