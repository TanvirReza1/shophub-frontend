export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto p-10 space-y-8">
      <h1 className="text-3xl font-bold">About the Project</h1>

      {/* Project Overview */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Project Overview</h2>
        <p className="text-gray-600 leading-relaxed">
          This project is a simple full-stack web application built using
          Next.js 15/16 (App Router) and an Express.js backend API. The goal of
          the project is to demonstrate modern web development concepts such as
          routing, authentication, protected pages, API integration, and clean
          UI structure.
        </p>
      </section>

      {/* Core Features */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Core Features</h2>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            <strong>Landing Page:</strong> A public landing page containing
            multiple relevant sections along with a navbar and footer. No
            authentication is required to access this page.
          </li>

          <li>
            <strong>Authentication:</strong> A basic mock authentication system
            using a hardcoded email and password. Authentication state is stored
            in browser cookies, and protected routes redirect unauthenticated
            users appropriately.
          </li>

          <li>
            <strong>Item List Page:</strong> A publicly accessible page that
            fetches and displays a list of items from an Express.js API. Each
            item is shown using a card layout including name, description,
            price, and image.
          </li>

          <li>
            <strong>Item Details Page:</strong> Displays full details of a
            selected item. This page is also publicly accessible and fetches
            data dynamically based on the item ID.
          </li>

          <li>
            <strong>Protected Add Item Page:</strong> A protected route that is
            accessible only to authenticated users. It contains a form for
            adding new items and stores the data through the Express.js backend.
          </li>
        </ul>
      </section>

      {/* Additional Enhancements */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Additional Enhancements</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Toast notifications on successful product creation</li>
          <li>Client-side route protection for secure pages</li>
          <li>Clean and responsive UI using modern styling practices</li>
          <li>Scalable project structure following real-world conventions</li>
        </ul>
      </section>

      {/* Technologies */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Technologies Used</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Next.js 15/16 (App Router)</li>
          <li>React (Client & Server Components)</li>
          <li>Express.js for backend API</li>
          <li>MongoDB / JSON-based data storage</li>
          <li>Tailwind CSS for styling</li>
          <li>Cookie-based authentication</li>
        </ul>
      </section>

      {/* Purpose */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Purpose of the Project</h2>
        <p className="text-gray-600 leading-relaxed">
          This project was developed as part of an academic/learning assignment
          to practice full-stack development using modern frameworks. It
          reflects real-world application structure and can be extended further
          with advanced authentication, role-based access, and production-ready
          features.
        </p>
      </section>
    </div>
  );
}
