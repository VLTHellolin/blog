import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function Sidebar() {
  return (
    <Card>
      <CardHeader>
        <Avatar>
          <AvatarImage src='https://github.com/VLTHellolin.png' />
          <AvatarFallback>H</AvatarFallback>
        </Avatar>
        <CardTitle>hellolin</CardTitle>
        <CardDescription>Frontend Dev & Competitive Programmer</CardDescription>
      </CardHeader>
    </Card>
  )
}