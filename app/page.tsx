import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center">AI Tools Hub</h1>
      <p className="text-center mt-4 text-xl">Explore and discover the best AI tools for your needs!</p>

      <div className="mt-8 flex justify-center">
        <Input placeholder="Search for tools..." className="w-96" />
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold">Tool Name</h2>
            <p className="mt-2">Short description of the tool.</p>
            <Button className="mt-4">Explore</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
