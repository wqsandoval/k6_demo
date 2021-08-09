import http from 'k6/http'

export let options = {
    stages:[
        {duration:'2s',target : '50'},
        {duration:'2s',target : '100'},
        {duration:'2s',target : '200'},
        {duration:'10s',target : '200'},
        {duration:'2s',target : '100'},
        {duration:'2s',target : '50'}
    ]
}

export default function (){
    http.get('https://test.k6.io/pi.php?decimals=100');
}

export function handleSummary(data){
    return{
        'report.json' : JSON.stringify(data),
    }
}