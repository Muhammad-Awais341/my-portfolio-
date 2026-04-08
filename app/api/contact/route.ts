import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email using Web3Forms API
    const formDataObj = new URLSearchParams();
    formDataObj.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");
    formDataObj.append("name", name);
    formDataObj.append("email", email);
    formDataObj.append("message", message);
    formDataObj.append("subject", `New message from ${name} - Portfolio Contact Form`);

    try {
      const formBody = formDataObj.toString();
      console.log("Sending to Web3Forms with access_key:", formDataObj.get("access_key"));
      console.log("Form body:", formBody);

      const emailResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody,
      });

      console.log("Response status:", emailResponse.status);
      console.log("Response ok:", emailResponse.ok);
      console.log("Response headers:", Object.fromEntries(emailResponse.headers));

      // Get response as text first
      const responseText = await emailResponse.text();
      console.log("Raw response:", responseText.substring(0, 500)); // Log first 500 chars

      let emailData;
      try {
        emailData = JSON.parse(responseText);
        console.log("Parsed JSON response:", emailData);
      } catch (parseErr) {
        console.error("Failed to parse response as JSON:", parseErr);
        console.error("Response was HTML or text. This usually means the access key is invalid or the API endpoint changed.");
        return NextResponse.json(
          { error: "Email service error: Invalid response. Please verify your Web3Forms access key is correct." },
          { status: 500 }
        );
      }

      if (!emailResponse.ok || emailData.success === false) {
        console.error("Web3Forms error:", emailData);
        return NextResponse.json(
          { error: emailData.message || "Failed to send email. Please check your Web3Forms setup." },
          { status: emailResponse.status || 500 }
        );
      }

      console.log("✓ Email sent successfully to:", email);
      return NextResponse.json(
        { message: "Message received. I will get back to you soon!", success: true },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      const errorMsg = emailError instanceof Error ? emailError.message : "Unknown error";
      console.error("Error details:", errorMsg);
      
      return NextResponse.json(
        { error: errorMsg },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Request processing error:", error);
    const errorMsg = error instanceof Error ? error.message : "Failed to process request";
    return NextResponse.json(
      { error: errorMsg },
      { status: 500 }
    );
  }
}

