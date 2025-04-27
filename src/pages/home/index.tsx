import {instance} from "@shared/api/instance.ts";
import {CardHeader, Card, CardContent, CardTitle, CardFooter} from "@shared/components/ui/card.tsx";
import {Button} from "@shared/components/ui/button.tsx";
import useSWR from "swr";


const Home = () => {
    const {data} = useSWR('https://dummyjson.com/recipes', (url) => instance.get(url, {
        params: {
            status: 1
        },
    }));
    return (
        <>
            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <div className="flex flex-col gap-4 py-4 px-6 md:gap-6 md:py-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Test</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {JSON.stringify(data, null, 2)}
                            </CardContent>
                            <CardFooter className={'flex justify-between'}>
                                <Button size={'lg'}>Title</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
