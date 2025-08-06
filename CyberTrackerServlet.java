import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class CyberTrackerServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int score = 0;
        for (int i = 1; i <= 10; i++) {
            String ans = request.getParameter("q" + i);
            if ("yes".equalsIgnoreCase(ans)) {
                score++;
            }
        }

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<h2>Your Cyber Hygiene Score: " + score + "/10</h2>");
        if (score >= 8) {
            out.println("<p>✅ Excellent! Your cyber habits are strong.</p>");
        } else if (score >= 5) {
            out.println("<p>⚠️ Moderate. Please improve your practices.</p>");
        } else {
            out.println("<p>❌ Poor. Immediate attention required!</p>");
        }
    }
}
