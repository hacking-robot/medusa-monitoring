{
    "machines" : {
        "machine1" : {
            "name" : "machine1",
            "address" : "localhost",
            "services" : [
                {
                    "module" : "ping",
                    "services": {"ping":{}},
                    "delay" : "10"
                }
            ]
        },
        "machine2" : {
            "name" : "machine2",
            "address" : "localhost",
            "services" : [
                {
                    "module" : "ping",
                    "services": {"ping":{}},
                    "delay" : "10"
                }
            ]
        }
        
    }
}