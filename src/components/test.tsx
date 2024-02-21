/**
 * v0 by Vercel.
 * @see https://v0.dev/t/51ZppjQ9XaB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <section className="w-full py-12">
      <div className="container grid gap-6 px-4 md:px-6 prose prose-lg max-w-none">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl md:leading-[3.5rem]">
            Connect with your future self
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Write letters or record videos to be delivered to your future self
          </p>
        </div>
        <div className="space-y-8">
          <div className="grid gap-4">
            <p>
              Beyond Letter is a platform that allows you to create a personal time capsule by sending messages to your
              future self. You can choose to write letters or record videos, expressing your thoughts, emotions, and
              aspirations. These messages can be scheduled for delivery at a specific date and time in the future.
            </p>
            <p>
              Once the scheduled time arrives, you will receive a surprise email from your past self, creating a special
              and intimate connection with your own thoughts over time. This can be a powerful and reflective
              experience, as you witness your own growth and evolution.
            </p>
            <p>
              The platform provides a simple and user-friendly interface for composing your messages. You can customize
              the appearance of your letters or videos with different fonts, colors, and styles. Additionally, you can
              add attachments such as photos or documents to enhance your messages.
            </p>
            <p>
              Beyond Letter ensures the privacy and security of your messages. Your content is encrypted and stored
              securely, guaranteeing that only you will be able to access and view your messages.
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="#">Get started</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

