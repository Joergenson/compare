package main

import (
	"fmt"
    "os"
    "encoding/binary"
)

func main() {
    path := os.Args[1]

    fmt.Println("path: ", path)

	filehandle, err := os.Open(path)
	if err != nil {
		fmt.Println("Error opening file!!!")
        return;
	}

	byteBuff := make([]byte, 12)
	totalLen, err := filehandle.Read(byteBuff)
	if err != nil {
		fmt.Println(err, totalLen)
	}
    var test int32

    test = int32()byteBuff[:4]
	// fmt.Printf("File Data: \n%d\n", binary.Read(byteBuff[0:4], ))
	// fmt.Printf("File Data: \n%d\n", binary.LittleEndian.Uint32(byteBuff[4:8]))

	filehandle.Close()
}
