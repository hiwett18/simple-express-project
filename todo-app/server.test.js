import { application } from "express";
import request from "supertest";
import createServer from "./server.js";

const server = await createServer();

describe("Just testing the server", function(){
    describe("Testing the /todo route", function(){
        it("Should be unable to get todos without flag", function(done){
            request(server).get("/todo").expect(401).end(function(err){
                if(err){
                    throw err;
                } else {
                    done();
                }
            })
        });
        it("should be able to create a new todo", function(done){
            request(server).post("/todo?admin=true").send({
                todo: "clean the grage"
            }).set('Accept', "application/json").expect(200).end(function(err, response){
                if(err){
                    throw err;
                } else {
                    expect(response.body).toEqual({ success: true });
                    done();
                }
            })
        });
        it("should be able to test edit todo", function(done){
            request(server).put("/todo/6z6m?admin=true").send({
                todo: "take out trash and cut the grass"
            }).set('Accept', "application/json").expect(200).end(function(err, response){
                if(err){
                    throw err;
                } else {
                    expect(response.body).toEqual({ success: true });
                    done();
                }
            })
        });
        it("should be able to test delete todo", function(done){
            request(server).delete("/todo/wIXQ?admin=true").end(function(err, response){
                if(err){
                    throw err;
                } else {
                    expect(response.body).toEqual({ success: true });
                    done();
                }
            })
        });
        it("should be able to create a new todo", function(done){
            request(server).post("/todo?admin=true").send({
                todo: "clean the grage"
            }).set('Accept', "application/json").expect(200).end(function(err, response){
                if(err){
                    throw err;
                } else {
                    expect(response.body).toEqual({ success: true });
                    done();
                }
            })
        })
    })
})