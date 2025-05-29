
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactFormData = await req.json();

    console.log("Received contact form submission:", { name, email });

    // Send email to your personal email
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["sjayanth2004@gmail.com"],
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Message</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 8px;">
              <h3 style="margin: 0 0 10px 0; color: #374151;">Contact Details:</h3>
              <p style="margin: 5px 0; color: #6b7280;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0; color: #6b7280;"><strong>Email:</strong> ${email}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="margin: 0 0 15px 0; color: #374151;">Message:</h3>
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
                <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center;">
              <p style="color: #9ca3af; font-size: 14px; margin: 0;">
                This message was sent from your portfolio contact form.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to the sender
    await resend.emails.send({
      from: "S Jayanth <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for reaching out!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You, ${name}!</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <p style="color: #374151; line-height: 1.6; font-size: 16px;">
              Thank you for reaching out through my portfolio website. I have received your message and will get back to you as soon as possible.
            </p>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0; color: #374151;">Your Message:</h3>
              <p style="margin: 0; color: #6b7280; font-style: italic; white-space: pre-wrap;">"${message}"</p>
            </div>
            
            <p style="color: #374151; line-height: 1.6;">
              In the meantime, feel free to connect with me on:
            </p>
            
            <div style="margin: 20px 0;">
              <a href="https://linkedin.com/in/s-jayanth-10859a266/" style="display: inline-block; margin-right: 15px; color: #667eea; text-decoration: none;">LinkedIn</a>
              <a href="https://github.com/sj3035" style="display: inline-block; color: #667eea; text-decoration: none;">GitHub</a>
            </div>
            
            <p style="color: #374151; line-height: 1.6;">
              Best regards,<br>
              <strong>S Jayanth</strong><br>
              Computer Science Student at SRMIST<br>
              Data Science & Analytics Intern
            </p>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center; margin-top: 30px;">
              <p style="color: #9ca3af; font-size: 14px; margin: 0;">
                This is an automated response. Please do not reply to this email.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
