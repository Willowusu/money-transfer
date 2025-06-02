import "./App.css";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import MobileMoneySection from "./components/ui/MobileMoney";
import Testimonials from "./components/ui/Testimonial";

function App() {
  return (
    <div>
      <h1 className="text-2xl text-center">Hello There!</h1>
      <Button>Click Me</Button>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Testimonials />
      <MobileMoneySection />
    </div>
  );
}

export default App;
