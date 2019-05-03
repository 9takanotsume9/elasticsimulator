import json
import os
from pathlib import Path

from elasticsearch import Elasticsearch, helpers, exceptions
from flask import Flask, make_response, render_template, request, redirect, url_for

from esim.api.utils import get_index_names


app = Flask(__name__)
ELASTICSEARCH = None


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/connect', methods=['POST'])
def connect():
    req_connect = request.form
    port_num = int(req_connect['port-num'])
    
    # 他のやり方がわからないのでとりあえずグローバル変数で
    try:
        global ELASTICSEARCH
        ELASTICSEARCH = Elasticsearch("localhost:{}".format(port_num))
        res = get_index_names(ELASTICSEARCH)
        return make_response(res)
    except exceptions.ConnectionError:
        return make_response('', 204)


def mytest():
    pass