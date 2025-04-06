// /app/api/chat/route.ts
import { NextResponse } from "next/server";

// This route handles POST requests from the ChatBot component
export async function POST(request: Request) {
	const { message } = await request.json();

	// Validate input
	if (!message) {
		return NextResponse.json(
			{ reply: "No message provided." },
			{ status: 400 }
		);
	}

	// Ensure the API key is defined
	if (!process.env.OPENAI_API_KEY) {
		return NextResponse.json(
			{ reply: "OpenAI API key is not configured." },
			{ status: 500 }
		);
	}

	try {
		// Call the OpenAI API
		const response = await fetch(
			"https://api.openai.com/v1/chat/completions",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
				},
				body: JSON.stringify({
					model: "gpt-3.5-turbo", // oder "gpt-4"
					messages: [{ role: "user", content: message }],
					max_tokens: 150,
					temperature: 0.7
				})
			}
		);

		if (!response.ok) {
			const errorDetails = await response.text(); // Hole die genaue Fehlermeldung
			console.error(
				`OpenAI API error: ${response.statusText}`,
				errorDetails
			);
			throw new Error(`OpenAI API error: ${response.statusText}`);
		}

		const data = await response.json();
		const reply =
			data.choices && data.choices[0]?.message?.content
				? data.choices[0].message.content.trim()
				: "Sorry, something went wrong.";

		return NextResponse.json({ reply });
	} catch (error) {
		console.error("Error calling OpenAI API:", error);
		return NextResponse.json(
			{ reply: "Failed to fetch a response from OpenAI." },
			{ status: 500 }
		);
	}
}
