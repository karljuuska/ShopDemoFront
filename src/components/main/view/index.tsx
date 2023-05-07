import React, {useEffect, useState} from 'react';
import ItemButton from '../button';
import {usersstyles} from './styles.js';
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import getRequest from '../../../services/getRequest';
import getImage from '../../../services/RequireImage';
import ItemEntry from '../../restock/modal';
import Checkout from '../../checkout/modal';
import {ITEMS_URL} from '../../../res/URLs';

function Main() {
  const [itemEntry, setItemEntry] = useState(false);
  const [post, setPost] = useState<any[]>([]);
  const [counts, setCounts] = useState<any[]>([]);
  const [intervalState, setintervalState] = useState(30000);
  const [total, setTotal] = useState(0);
  const [viewCheckout, setViewCheckout] = useState(false);
  const [offline, setOffline] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [totalInconsumables, setTotalInconsumables] = useState(0);

  function getEmptyCounts(i: number) {
    return Array.from({length: i}, _ => 0);
  }

  function resetFields() {
    setCounts(getEmptyCounts(totalItems));
    setintervalState(30000);
    setTotal(0);
  }

  useEffect(() => {
    setTotal(0);

    getRequest(ITEMS_URL).then(data => {
      setPost(data[1]);
      setOffline(data[0]);
      setCounts(getEmptyCounts(data[1].length));
      setTotalItems(data[1].length);
      let countInconsumables = 0;
      for (let i = 0; i < data[1].length; i++) {
        if (!data[1][i].isConsumable) {
          countInconsumables += 1;
        }
      }
      setTotalInconsumables(countInconsumables);
    });
    if (!offline) {
      for (let i = 0; i < post.length; i++) {
        if (post[i].amount < counts[i]) {
          setCounts({...counts, [i]: post[i].amount});
        }
      }
    } else {
      setCounts(getEmptyCounts(post.length));
    }
    // Wrooom
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      try {
        //Should be in a separate function
        getRequest(ITEMS_URL).then(data => {
          if (!data[0]) {
            if (offline) {
              setCounts(getEmptyCounts(data[1].length));
              setTotalItems(data[1].length);
              let countInconsumables = 0;
              for (let i = 0; i < data[1].length; i++) {
                if (data[1][i].itemType !== 'Food') {
                  countInconsumables += 1;
                }
              }
              setTotalInconsumables(countInconsumables);
              setCounts(getEmptyCounts(data[1].length));
            } else {
              for (let i = 0; i < data[1].length; i++) {
                if (data[1][i].itemAmount < counts[i]) {
                  setTotal(
                    previousValue =>
                      previousValue -
                      data[1][i].itemPrice *
                        (counts[i] - data[1][i].itemAmount),
                  );
                  counts[i] = data[1][i].itemAmount;
                }
              }
            }
          } else {
            setCounts(getEmptyCounts(data[1].length));
          }
          setPost(data[1]);
          setOffline(data[0]);
        });
        let allZero = true;
        for (let i = 0; counts.length; i++) {
          if (counts[i] !== 0) {
            allZero = false;
            break;
          }
        }
        if (allZero) {
          setintervalState(30000);
        }
      } catch (err) {
        console.error('Error updating: ', err);
        throw err;
      }
    }, intervalState);
    return () => clearInterval(interval);
  }, [totalInconsumables, counts, intervalState, offline]);

  function changeCounter(i: number) {
    if (counts[i] < post[i].itemAmount) {
      counts[i] += 1;
      setTotal(previousValue => previousValue + post[i].itemPrice);
      if (intervalState !== 2500) {
        setintervalState(2500);
      }
    }
  }

  function changeItemEntry() {
    resetFields();
    //Here could be getItems, to update ItemAvailability, but is overlapping when cancelling a restock
    setItemEntry(!itemEntry);
  }

  function makeCheckout() {
    setViewCheckout(!viewCheckout);
    if (viewCheckout) {
      resetFields();
    }
  }

  function getPost() {
    let checkoutItems = [];
    for (let i = 0; i < post.length; i++) {
      if (counts[i] > 0) {
        checkoutItems.push(post[i]);
      }
    }
    return checkoutItems;
  }

  function getCounts() {
    const returnArray = [];
    if (!offline) {
      for (let i = 0; i < counts.length; i++) {
        if (counts[i] > 0) {
          returnArray.push(counts[i]);
        }
      }
    }

    return returnArray;
  }

  return (
    <View style={usersstyles.containerView}>
      <View style={usersstyles.buttonsView}>
        {offline ? (
          <View style={usersstyles.offlinePrompt}>
            <Text style={usersstyles.rowname}>LOADING</Text>
            <ActivityIndicator />
          </View>
        ) : (
          <FlatList
            style={usersstyles.flatList}
            data={post}
            renderItem={({item, index}) => (
              <ItemButton
                name={item.itemName}
                price={item.itemPrice}
                amount={item.itemAmount}
                state={item.itemState}
                onClick={() => changeCounter(index)}
                count={counts[index]}
                img={getImage(item.itemName)}
              />
            )}
            numColumns={3}
          />
        )}
      </View>

      <View style={usersstyles.bottomContainer}>
        <View style={usersstyles.rowCenter}>
          <View style={usersstyles.rowline}>
            <View style={usersstyles.row}>
              <Text style={usersstyles.rowname}>TOTAL</Text>
              <Text style={usersstyles.rowprice}>{total.toFixed(2)}</Text>
            </View>
          </View>
        </View>

        <View style={usersstyles.buttoncontainer}>
          <View style={usersstyles.entryButtonView}>
            <TouchableOpacity
              onPress={changeItemEntry}
              style={usersstyles.btnentry}>
              <Text style={usersstyles.btnentrytext}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={usersstyles.btnResChkContainer}>
            <View style={usersstyles.resetButtonView}>
              <TouchableOpacity
                style={usersstyles.btnreset}
                onPress={resetFields}>
                <Text style={usersstyles.btnresettext}>RESET</Text>
              </TouchableOpacity>
            </View>
            <View style={usersstyles.checkoutButtonView}>
              <TouchableOpacity
                style={usersstyles.btncheckout}
                onPress={makeCheckout}>
                <Image style={usersstyles.cartLogo} source={getImage('Cart')} />
                <Text style={usersstyles.btncheckouttext}>CHECKOUT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ItemEntry
          offline={offline}
          data={post.filter(item => item.itemType !== 'Food')}
          visible={itemEntry}
          onPress={changeItemEntry}
          counts={getEmptyCounts(totalInconsumables)}
        />
        <Checkout
          visible={viewCheckout}
          onPress={makeCheckout}
          data={getPost()}
          counts={getCounts()}
          total={total}
        />
      </View>
    </View>
  );
}

export default Main;
